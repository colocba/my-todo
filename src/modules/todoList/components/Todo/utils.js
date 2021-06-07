export const getBorderColorByPriority = (priority) => {
    switch (priority) {
        case "high":
            return 'red';
        case "medium":
            return 'orange';
        case "low":
            return 'deepskyblue';
        default:
            return 'deepskyblue';
    }
};
