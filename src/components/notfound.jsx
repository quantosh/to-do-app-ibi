function Notfound() {
  const style = {
    bg: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
  }

  return (
    <div class="" >
      <div class="">
        <div class="max-w-md">
          <div class="max-w-lg">
            <img src="https://simg.nicepng.com/png/small/843-8430432_kawaii-cute-tiger-3-cat.png" alt="" className="w-40" />
          </div>
          <div class="text-6xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
          <p class="mb-8">But dont worry, you can find plenty of other things on our homepage. </p>
          <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
        </div>
      </div>
    </div >
  )
}

export default Notfound

