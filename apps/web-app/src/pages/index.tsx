import { sayHello } from '@optional-package-scope/foo'
import { AsyncMessage, Message } from '@optional-package-scope/bar'
import {Layout} from "@/components/layout";
import {InfoCard} from "@optional-package-scope/bar/component/info-card";

export default function Home() {
  return (
    <Layout>
      <h3>I'm the web-app</h3>
      <ul>
        <InfoCard originatingAppName={'web-app'}/>
        <li>{`Foo says: ${sayHello(
          'World'
        )} from @optional-package-scope/foo`}</li>
        <li>
          <Message
            message={'Bar react component from @optional-package-scope/bar'}
          />
        </li>
        <li>
          <AsyncMessage apiUrl={'/api/hello'} />
        </li>
      </ul>
      <img src={'/images/nextjs-logo.png'} alt={'logo'} />
    </Layout>
  )
}
