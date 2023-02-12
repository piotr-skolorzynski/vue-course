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
    },
    async loadCoaches(context) {
        const response = await fetch(`https://vue-course-http-requests-d7100-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
                id: key
            };

            coaches.push(coach);
        };

        context.commit('coaches', coaches);
    }
}