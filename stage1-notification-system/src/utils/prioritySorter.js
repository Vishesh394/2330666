const priorityMap = {
  Placement: 3,
  Event: 2,
  Result: 1,
};

function sortNotifications(notifications) {
  return [...notifications].sort((a, b) => {
    const p1 = priorityMap[a.type] || 0;
    const p2 = priorityMap[b.type] || 0;

    if (p1 !== p2) {
      return p2 - p1;
    }

    return new Date(b.timestamp) - new Date(a.timestamp);
  });
}

module.exports = {
  sortNotifications
};