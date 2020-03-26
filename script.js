const svg = d3.select('body').append('svg')
  .attr('width', '800')
  .attr('height', '100');

let arrData = createData();

svg.selectAll('circle')
  .data(arrData).enter()
  .append('circle')
  .attrs({
    cx: (d, i) => {
      return (i * 90) + 40
    },
    cy: 50,
    r: (d) => d,
    fill: 'orange'
  });

d3.interval(function() {
  // console.log('hello');
  update(svg);
}, 1200);



function update(selection) {
  let data = createData();
  console.log(data);
  const circles = selection.selectAll('circle')
    .data(data);
  let enter = circles.enter()
    .append('circle')
    .attrs({
      cx: (d, i) => {
        return (i * 90) + 40
      },
      cy: 50,
      r: 0,
      fill: 'green'
    }).transition().duration(400)
    .attrs({
      r: (d) => d
    });

  let update = circles.attrs({
      cx: (d, i) => {
        return (i * 90) + 40
      },
      cy: 50
    })
    .transition().duration(1000)
    .attrs({
      r: (d) => d,
      fill: 'orange'
    });

  let exit = circles.exit()
    .attrs({
      // cx: (d, i) => {
      //   return (i * 90) + 40
      // },
      // cy: 50,
      // r: (d) => d,
      fill: 'red'
    })
    .transition().duration(1000)
    .style('opacity', 0)
    .remove();
}

function createData() {
  let data = [];
  let numberCircles = getRndInteger(0, 11);
  for (i = 0; i < numberCircles; i++) {
    let num = getRndInteger(20, 40);
    data[i] = num;
  }
  return data
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}