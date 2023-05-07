import '... @/styles/globals.css'
import '... @/styles/navbar.css'
import '... @/styles/signup.css'
import '... @/styles/login.css'
import '... @/styles/profile.css'
import '... @/styles/main_login.css'
import '... @/styles/main.css'
import '... @/styles/home.css'
import '... @/styles/card_project.css'
import '... @/styles/footer.css'
import '... @/styles/form.css'

import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
