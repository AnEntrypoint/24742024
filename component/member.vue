<template>
    <div class="container mx-auto max-w-screen-xl flex-grow px-0 pt-8 pb-2 sm:px-5 pt-6">
        <div class="grid grid-cols-12 lg:gap-8 ">
            <div class="col-span-12 md:col-span-12 lg:col-span-4 ">
                <div class="mb-4 space-y-5 px-5 sm:px-0">
                    <div class="relative mt-4 h-32 w-32 sm:mt-4 sm:h-52 sm:w-52"><img v-bind:src="member.pfpUrl"
                            class="h-32 w-32 rounded-xl bg-gray-200 ring-8 ring-gray-50 dark:bg-gray-700 dark:ring-black sm:h-52 sm:w-52 shadow-lg"
                            height="128" width="128" v-bind:alt="member.pseudonym"></div>
                    <div class="space-y-1 py-2">
                        <div class="flex items-center gap-1.5 text-2xl font-bold">
                            <div class="truncate">{{ member.pseudonym }}</div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span
                                class="from-brand-600 dark:from-brand-400 bg-gradient-to-r to-pink-600 bg-clip-text text-transparent dark:to-pink-400 text-sm sm:text-base">@teknopath</span>
                        </div>
                    </div>
                    <div class="leading-md linkify text-md mr-0 break-words sm:mr-10">
                        <span class="">{{ member.bio }}</span>
                    </div>
                    <div class="space-y-5">
                        <h4>OFFICIAL HOLDINGS</h4>
                        <div class="flex">
                            <img alt="genesisbaby" height="64" width="64" class="border-solid border-black border-2" title="Backgrounds:Grey
Colors:Dark
Linework:Lines
Faces:Tired
Hairstyles:Brown
Glasses:None" src="https://ipfs.io/ipfs/QmRM184sSk6sHwgxv8MuZHSqrVkxZsiz6gVyqCqSbJhfn9/2.png">
                        </div>
                        <div class="divider w-full"></div>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <div class="text-md truncate">
                                    <span>
                                        <a href="https://rarible.com/token/polygon/0x2f880C94572259C100fd8801523dc58a92B5c27e"
                                            target="_blank" rel="noreferrer" class="text-sm">{{ member.ERC20 }}</a>
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2"><img
                                    src="https://www.google.com/s2/favicons?domain=hey.xyz" class="h-4 w-4 rounded-full"
                                    height="16" width="16" alt="Website">
                                <div class="text-md truncate">
                                    <a v-bind:href="'https://hey.xyz/u/' + member.lens" target="_blank"
                                        rel="noreferrer noopener me">https://hey.xyz/u/{{ member.lens }}</a>
                                </div>
                            </div>
                            <div class="flex items-center gap-2"><img
                                    src="https://static-assets.lenster.xyz/images/brands/twitter-dark.svg" class="h-4 w-4"
                                    height="16" width="16" alt="Twitter Logo">
                                <div class="text-md truncate">
                                    <a v-bind:href="'https://twitter.com/' + member.twitter" target="_blank"
                                        rel="noreferrer noopener">{{ member.twitter }}</a>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="text-md truncate">
                                        <a target="_blank" href="https://discord.gg/an-entrypoint-367741339393327104">
                                            <i class="fab fa-discord"></i>247420
                                        </a>
                                    </div>
                                </div>


                            </div>

                            <div class="flex items-center gap-2">
                                <div class="text-md truncate">
                                    <a target="_blank" href="https://github.com/lanmower">
                                        <i class="fab fa-github"></i>
                                        {{ member.pseudonym }}
                                    </a>
                                </div>
                            </div>


                            <div class="flex items-center gap-2">
                                <div class="text-md truncate">
                                    <a target="_blank" v-bind:href="'https://youtube.com/' + member.youtube">
                                        <i class="fab fa-youtube"></i>
                                        {{ member.youtube }}
                                    </a>
                                </div>
                            </div>



                            <div class="flex items-center gap-2">
                                <div class="text-md truncate">
                                    <a target="_blank" v-bind:href="'https://mastodon.247420.xyz/@' + member.mastodon">
                                        <i class="fab fa-mastodon"></i>
                                        https://mastodon.247420.xyz/@{{ member.mastodon }}
                                    </a>
                                </div>
                            </div>


                            <div class="flex items-center gap-2">
                                <div class="text-md truncate">
                                    <a target="_blank"
                                        v-bind:href="'https://www.facebook.com/firstearbender' + member.facebook">
                                        <i class="fab fa-facebook"></i>
                                        {{ member.facebook }}
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div v-for=" post  in    member.expand?.posts   "
                class="col-span-12 mb-5 md:col-span-12 lg:col-span-8 space-y-5">

                <div class="infinite-scroll-component__outerdiv">
                    <div class="infinite-scroll-component " style="height: auto; overflow: auto;">
                        <div class="rounded-none sm:rounded-xl border bg-white dark:border-gray-700 dark:bg-black divide-y-[1px] dark:divide-gray-700"
                            data-test="">


                            <article
                                class="cursor-pointer p-5 first:rounded-t-xl last:rounded-b-xl hover:bg-gray-100 dark:hover:bg-gray-900">
                                <a href="https://lenster.xyz/posts/0x01ac47-0xbf">
                                    <div class="flex justify-between space-x-1.5 pb-4">
                                        <span>
                                            <div class="flex items-center justify-between">
                                                <span>
                                                    <span aria-expanded="false">
                                                        <div class="flex items-center space-x-3"><img
                                                                v-bind:src="member.pfpUrl" loading="lazy"
                                                                class="h-10 w-10 rounded-full border bg-gray-200 dark:border-gray-700"
                                                                height="40" width="40" alt="teknopath">
                                                            <div>
                                                                <div class="flex max-w-sm items-center truncate">
                                                                    <div class="text-md">{{ post.author }}</div>
                                                                </div>
                                                                <div>
                                                                    <span
                                                                        class="from-brand-600 dark:from-brand-400 bg-gradient-to-r to-pink-600 bg-clip-text text-transparent dark:to-pink-400 text-sm">@{{
                                                                            post.lensuser }}</span>
                                                                    <span class="lt-text-gray-500">
                                                                        <span class="mx-1.5">·</span>
                                                                        <span class="text-xs" v-bind:title="post.date">{{
                                                                            post.date }}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </span>

                                            </div>
                                        </span>
                                    </div>
                                    <div class="ml-[53px]">
                                        <div class="break-words">
                                            <span v-html="post.body"
                                                class="leading-md linkify text-md whitespace-pre-wrap break-words">

                                            </span>
                                            <div class="grid-cols-1 grid-rows-1 grid gap-2 pt-3">
                                                <div class="  w-2/3 relative">

                                                    <img class="cursor-pointer rounded-lg border bg-gray-100 object-cover dark:border-gray-700 dark:bg-gray-800"
                                                        loading="lazy" height="1000" width="1000"
                                                        src="https://ik.imagekit.io/lens/media-snapshot/dade3d1c62f630740fca53bb74618b5b0be03bfb938def73dfe583af5e67ac70.jpg"
                                                        alt="https://ik.imagekit.io/lens/media-snapshot/dade3d1c62f630740fca53bb74618b5b0be03bfb938def73dfe583af5e67ac70.jpg">



                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </article>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            member: {}
        }
    },
    created() {
        this.start()
    },
    methods: {
        async start() {
            const posts = await pb.collection("posts")
            this.member = await pb.collection('members').getOne(this.$route.params.id, {
                expand: 'posts',
            });
            console.log(this.member)
            this.member.pfpUrl = pb.files.getUrl(this.member, this.member.pfp)
        }
    }
}
</script>
