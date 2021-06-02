import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        const fmediaId = post.featured_media;
        const media = state.source.attachment[fmediaId];
        return (
          <Card key={item.id}>
            {fmediaId > 0 &&
              <Image alt={media.title.rendered} src={media.source_url} />}
            <Link  link={post.link}>
            {post.title.rendered}
            </Link>
          </Card>
        )
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  )
}

export default connect(List)

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 343px;
  margin: 5px;
  border: 1px solid black;
  boder-radius
`

const Image = styled.img`
  width: 100%;
  height: 200px;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > a {
    display: block;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`