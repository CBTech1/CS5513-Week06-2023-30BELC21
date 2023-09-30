import Head from 'next/head';
import Link from 'next/link';

export default function Conception( {children,house} ){
  return(
    <div>
      <Head>
        <title>Mon Application</title>
      </Head>
      <header>
        <nav> 
          <a href="https://www.cat-bounce.com/">Check out this enjoyable cat site</a>
        </nav>        
      </header>
      <main>
        {children}
      </main>
      {!house && (
        <Link href = "/" className = "btn btn-primary mt-3">
        ⇦ Back to maison
        </Link>
       )
      }

      <footer>
        <h3>Huge Footer</h3>
      </footer>
    </div>
  );
}