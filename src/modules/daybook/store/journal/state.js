
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis esse cumque, placeat enim reiciendis quod aperiam porro illo delectus, laborum aliquid corrupti fugiat. Enim deleniti labore consequatur dolorem nobis delectus?',
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quaerat sequi maxime impedit maiores molestias illum quas incidunt ullam, sint debitis. Dicta natus ut doloremque voluptas beatae, odio reprehenderit soluta?',
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non reprehenderit ut velit eveniet placeat voluptatum nemo qui quisquam soluta earum nam, fuga nisi amet quia iure ex mollitia omnis!',
      picture: null
    }

  ]

})