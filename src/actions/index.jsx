import axios from 'axios';

const test = () => ({
    type: 'test',

})
const testSyncAction = (data) => ({
    type: 'testSyncAciton',
    data
})
const SyncAction = (tab, page = 1, limit = 10) => {
    return dispath => {
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
            .then(req => {
                dispath(testSyncAction(req.data.data))
            })
            .catch(error => {
                console.log(error);
            })
    }
}
export { test, SyncAction };