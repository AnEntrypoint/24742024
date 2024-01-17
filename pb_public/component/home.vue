<template>
  {{ title }}
  <div v-for="member in members" class="card card-image-cover m-4">

    <div class="card-body">
      <h2 class="card-header">{{ member.pseudonym }}</h2>
      <p class="text-content2">{{ member.ERC20 }}</p>
      <div class="card-footer">
        <button class="btn-secondary btn">Learn More</button>
      </div>
    </div>
    <img v-bind:src="member.pfpUrl" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home',
      members: []
    }
  },
  created() {
    this.start()
  },
  methods: {
    async start() {
      const items = [];
      let page = 0;
      while (true) {
        const list = await pb.collection('members').getList(++page, 500);
        console.log(list.items.length)
        for (let index in list.items) {
          list.items[index].pfpUrl = pb.files.getUrl(list.items[index], list.items[index].pfp)
          items.push(list.items[index])
        }
        if (list.items.length < 500) break;
      }
      console.log(items)
      this.members = items;
    }
  }
}
</script>

<style>
.title {
  color: blue;
}
</style>