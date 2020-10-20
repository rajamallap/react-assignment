import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import moment from 'moment';
export const Posts = ({ post, excerpt }) => (


  <article className={excerpt ? 'post-excerpt' : 'post'} style={{ borderBottom: "none" }}>

    <Card style={{ width: "25%" }} >
      <Image src={post.imagelink} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{post.postid}</Card.Header>
        <Card.Meta>
          <span className='date'>created in {moment(post.creationtime).format('DD-MM-YYYY HH:mm:ss')}</span>
        </Card.Meta>
        <Card.Description>
          {post.source}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        Source Id :{post.sourceid}
        </a>
      </Card.Content>
    </Card>
  </article>
)
