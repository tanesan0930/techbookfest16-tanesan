export function GET() {
    const items = [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
    ]
   
    return Response.json({ items })
  }    