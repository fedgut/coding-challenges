const input = [
  '2020-10-02 08:00:00',
  '2020-10-02 18:00:00',
  '2020-10-02 13:00:00',
  '2020-10-02 14:00:00',
];

function scheduling(input) {
  const processedInput = input.map(elem => {
    const date = new Date(elem);
    return date;
  });
  console.log(processedInput);

  const availability = [processedInput[0], processedInput[1]];
  const blockedTime = [processedInput[2], processedInput[3]];

  if (availability[0] >= blockedTime[0] && availability[1] <= blockedTime[1]) {
    return [];
  }

  if (blockedTime[1] < availability[0]) {
    return availability;
  }

  if (availability[1] < blockedTime[0]) {
    return availability;
  }

  if (blockedTime[0] <= availability[0] && blockedTime[1] < availability[1]) {
    return [blockedTime[1], availability[1]];
  }

  if (blockedTime[0] > availability[0] && blockedTime[1] > availability[1]) {
    return [availability[0], blockedTime[0]];
  }

  if (blockedTime[0] > availability[0] && blockedTime[1] < availability[1]) {
    return [
      [availability[0], blockedTime[0]],
      [blockedTime[1], availability[1]],
    ];
  }
}

console.log(scheduling(input));
