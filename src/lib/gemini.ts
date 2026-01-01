type GeminiResult = {
  score: number;
  reasoning: string;
};

export async function scoreApplicant(
  projectTitle: string,
  projectSkills: string[],
  studentNote: string
): Promise<GeminiResult> {
  // Hackathon-safe mock (replace with real Gemini later)
  const score = Math.floor(70 + Math.random() * 25);

  return {
    score,
    reasoning: `Student shows alignment with ${projectSkills.join(
      ", "
    )} and demonstrates research interest.`,
  };
}
