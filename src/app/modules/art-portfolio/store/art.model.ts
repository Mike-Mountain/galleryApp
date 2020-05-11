export interface Art {
  id: number;
  acf: AcfArt;
}

interface AcfArt {
  title: string;
  description?: string;
  url?: string;
  tool: string;
  image: string;
}

function createAcfArt(params: Partial<AcfArt>) {
  return {
    title: params.title,
    description: params.description,
    url: params.url,
    tool: params.tool,
    image: params.image
  } as AcfArt;
}

export function createArt(params: Partial<Art>) {
  return {
    id: params.id,
    acf: createAcfArt(params.acf)
  } as Art;
}
