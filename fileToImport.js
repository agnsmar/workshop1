/*
 * The starting point of the application.
 *
 * @author Rickard Jarnling <rj222nr@student.lnu.se>
 * @version 1.0.0
 */

import { Application } from './application.js'

/*
 * The main function of the application.
 */
const main = async () => {
  const url = 'random url'

  try {
    // New Application with the URL from the Node argument.
    const application = new Application(url)
    await application.run()
  } catch (error) {
    console.error(error.message)
  }
}

main()