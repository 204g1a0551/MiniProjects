function cal()
{
    const birthday = new Date(document.getElementById('age1').value);
  const today = new Date();
  const ageInMilliseconds = today - birthday;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

  document.getElementById('result1').textContent = `You are approximately ${ageInYears} years old.`;
}
