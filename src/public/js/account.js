$.ajax({
    url: '/account',
    type: 'GET'
})
.then(data => {
    console.log('data')
})
.catch(next)
