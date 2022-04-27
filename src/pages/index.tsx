import { useTheme } from 'next-themes'

import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Main
      meta={
        <Meta
          title="Evil Boilerplate"
          description="The perfect boilerplate for your project."
        />
      }
    >
      <div
        className="container"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <h4>Sphinx of black quartz, judge my vow.</h4>
        <h5>Sphinx of black quartz, judge my vow.</h5>
        <h6>Sphinx of black quartz, judge my vow.</h6>
        <p>
          Sphinx of black quartz, judge my vow. Sphinx of black quartz, judge my
          vow.Sphinx of black quartz, judge my vow. Sphinx of black quartz,
          judge my vow. Sphinx of black quartz, judge my vow. Sphinx of black
          quartz, judge my vow.
        </p>
        <p>
          Sphinx of black quartz, judge my vow. Sphinx of black quartz, judge my
          vow.Sphinx of black quartz, judge my vow. Sphinx of black quartz,
          judge my vow. Sphinx of black quartz, judge my vow. Sphinx of black
          quartz, judge my vow.
        </p>
        <p>
          Sphinx of black quartz, judge my vow. Sphinx of black quartz, judge my
          vow.Sphinx of black quartz, judge my vow. Sphinx of black quartz,
          judge my vow. Sphinx of black quartz, judge my vow. Sphinx of black
          quartz, judge my vow.
        </p>
      </div>
    </Main>
  )
}

export default Index
