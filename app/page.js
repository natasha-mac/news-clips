

export async function getSummary() {
  const response = await fetch("http://127.0.0.1:5328/api/summary");
  const data = await response.json();
  return data;
}

export default async function Page() {

const data = await getSummary();
    return(
    <div>
      {data.articles.map((d) => {
        return (
          <li key={d.title}>
            {d.summary}
          </li>
        )
      })}
    </div>
  )
  }


//   /*
//   {
//     "source": {
//         "id": null,
//         "name": "ReadWrite"
//     },
//     "author": "Radek Zielinski",
//     "title": "GBTC Bitcoin ETF holdings drop before halving",
//     "description": "The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings.… Continue reading GBTC Bitcoin ETF holdings drop before halving\nThe post GBTC Bitcoin ETF holdings drop before halving ap…",
//     "url": "https://readwrite.com/gbtc-bitcoin-etf-holdings-drop-before-halving/",
//     "urlToImage": "https://readwrite.com/wp-content/uploads/2024/04/zxDgyfq8QYCzJhRAH2CF1g.jpg",
//     "publishedAt": "2024-04-17T16:43:29Z",
//     "content": "The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings. This is despite the outflows recently slowing down.\r\nAccordin… [+2125 chars]"
// }
//   */