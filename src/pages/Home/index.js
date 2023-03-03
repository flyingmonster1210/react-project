import Bar from "@/components/Bar"

function Home () {

  return (
    <div>
      <Bar
        title={'只是第一个title'}
        xData={['react', 'vue', 'angular']}
        yData={[30, 60, 50]}
        style={{ width: '500px', height: '400px' }}
      />
      <Bar
        title={'只是第二个title'}
        xData={['react', 'vue', 'angular']}
        yData={[90, 40, 50]}
        style={{ width: '500px', height: '400px' }}
      />
    </div>
  )
}

export default Home