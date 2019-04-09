<<template>
    <div>
        <h1>TASKS</h1>
        <p>Parametro: {{ id }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'id' //acessa da url
    ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>
