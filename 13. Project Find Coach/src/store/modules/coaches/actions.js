export default {
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;

        const coachData = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas
        };

        const response = await fetch(`https://vue-course-http-requests-d7100-default-rtdb.europe-west1.firebasedatabase.app/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            // error handling
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    }
}