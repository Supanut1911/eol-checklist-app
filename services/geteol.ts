export const fetchEOLk8s = async () => {
    const response = await fetch('https://endoflife.date/api/google-kubernetes-engine.json');
    const data = await response.json();
    return data;
}
