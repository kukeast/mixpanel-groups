import axios from 'axios';
import { firestore } from './firebase';

const token = 'Basic ZXZlbnQtdHJhY2tlci4zMDRhNzIubXAtc2VydmljZS1hY2NvdW50OjNET0lBa1pZZ2V0R0c5eFk0UHhUSlNxNDZRTkhVNDIz'
const axiosInstance = axios.create({
    headers: {
       Authorization: token
    }
});
  

export async function getAllBoards() {
    const response = await axiosInstance.get(`https://mixpanel.com/api/app/workspaces/3380921/dashboards/`);
    return response.data.results;
}

export async function getBoards(ids) {
    const requests = ids.map((id) => axiosInstance.get(`https://mixpanel.com/api/app/workspaces/3380921/dashboards/${id}/`));
    const response = await axios.all(requests).then(
        axios.spread((...res) => {
            return res.map(r => r.data.results)
        })
    )
    return response;
}

export async function getAllGroups() {
    const response = await firestore.collection('groups').orderBy('updated_at', 'desc').get().then(res => {
        return res.docs.map(
            doc => ({
                id: doc.id,
                ...doc.data()
            })
        )
    })
    return response
}

export async function getGroup(id) {
    const response = await firestore.collection('groups').doc(id).get().then(res => {
        return {
            id: res.id,
            ...res.data()
        }
    })
    return response
}

export async function createGroup(data) {
    const response = await firestore.collection('groups').add(data)
    return response
}

export async function updateGroup(id, data) {
    const response = await firestore.collection('groups').doc(id).update(data)
    return response
}