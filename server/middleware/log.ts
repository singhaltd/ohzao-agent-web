export default defineEventHandler((event) => {
    console.log('request: ' + event.req.url)
})