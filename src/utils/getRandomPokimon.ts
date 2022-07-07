const MAX_DEX_ID = 493;

export const getRandomPokimon: (notThisOne?: number) => number = (
  notThisOne?: number
) => {
  const pokidexNumber = Math.floor(Math.random() * (MAX_DEX_ID) + 1);

  if (pokidexNumber !== notThisOne) return pokidexNumber;

  return getRandomPokimon(notThisOne);
};

export const getOptionsForVote = () => {
    const firstId = getRandomPokimon()
    const secondId = getRandomPokimon(firstId)

    return [firstId, secondId]
}