QUnit.module('Main', {})

QUnit.test( "Test Multiplication", function( assert ) {
    assert.equal(multiply(10, 20), 200, "10 * 20 = 200");
    assert.equal(multiply(4, 4), 16, "4 * 4 = 16");
    assert.equal(multiply(2, 7), 14, "2 * 7 = 14");
});


window.addEventListener('load', () => {
    const appURL = '../index.html'
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>'
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end)
        const qunitFixtureBody = document.getElementById('qunit-fixture')
        qunitFixtureBody.innerHTML = html
        console.info(qunitFixtureBody)
        QUnit.start()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })
