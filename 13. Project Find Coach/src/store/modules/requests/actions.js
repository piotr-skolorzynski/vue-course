export default {
    contactCoach(context, payload) {
        const newRequest = {
            id: crypto.randomUUID(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };

        context.commit('addRequest', newRequest);
    },
};