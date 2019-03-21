<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <div v-for="thread in threads">
      <h2>{{thread.title}}</h2>
      <div v-for="postId in thread.posts">
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line semi
import sourceDate from '@/data.json';

console.log(sourceDate)
export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sourceDate.threads,
      posts: sourceDate.posts,
      users: sourceDate.users
    }
  }
}
</script>