import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
		<div class="d-flex flex-column">
            <footer class="footer">
              <div>
                <a href="https://github.com/xeroxzen">Andile Jaden M </a>
                <span>&copy; {(new Date().getFullYear())} Nexuslabs, Inc.</span>
              </div>
              <div class="ml-auto">
                <span>Powered by </span>
                <a href="#"> Google Jr</a>
              </div>
            </footer>
        </div>
    )
  }
}

export default Footer
