import { getChangelogProductPaths } from '@/src/common/static-paths';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetProducts } from 'sc-changelog/changelog';
import Product from 'sc-changelog/types/product';
import { slugify } from 'sc-changelog/utils/stringUtils';
import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
import { Alert } from 'ui/components/common/Alert';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

type ChangelogProps = {
  currentProduct: Product;
};

export async function getStaticPaths() {
  const paths = await getChangelogProductPaths();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const products = await GetProducts().then((response: Product[]) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  return {
    props: {
      currentProduct: currentProduct,
    },
    revalidate: 60,
  };
}

const ChangelogProduct = ({ currentProduct }: ChangelogProps) => {
  const router = useRouter();
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements">
        <div className="absolute flex h-8 flex-row dark:hidden">
          <span className="mr-1 text-xs">Powered by</span>
          <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
            <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
          </Link>
        </div>
        <div className="absolute hidden h-8 flex-row dark:flex">
          <span className="mr-1 text-xs">Powered by</span>
          <Link href="/content-management/content-hub-one" title="Visit the Content Hub ONE product page to learn more">
            <Image src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5e8689d29cc4ef49a74b96e2149af13" className="transition hover:scale-105" alt="Powered by Content Hub ONE" width={150} height={18} priority={true} />
          </Link>
        </div>
      </Hero>
      <VerticalGroup>
        <Container>
          <Alert icon="info">
            <p>
              You are viewing the public preview of the upcoming Sitecore global changelog.
              <Link href="/changelog/current" title="View the list of current release notes per product" className="mx-1 font-bold hover:underline">
                Click here
              </Link>
              for the current release notes per product
            </p>
          </Alert>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <ChangelogList initialProduct={currentProduct} />
            </div>
            <div className="col-span-2 hidden md:block">
              <div className="flex flex-row">
                <SmallLinkButton text={'RSS'} href={`${router.asPath}/rss.xml`} icon={'feed'} />
                <SmallLinkButton text={'ATOM'} href={`${router.asPath}/atom.xml`} icon={'feed'} />
              </div>
              <ChangelogByMonth product={currentProduct} />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};
export default ChangelogProduct;
