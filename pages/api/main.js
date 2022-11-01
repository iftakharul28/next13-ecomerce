export default function handler(req, res) {
  res.status(200).json({
    datalist: [
      {
        name: 'Iftakharul Alam',
        description: 'Front End Developer',
      },
    ],
  });
}
