import {graphql} from 'gatsby'

export {default} from '../../components/GitHubMDXRenderer'

export const query = () => graphql`
  query SyntaxTreeUnistReadme {
    github {
      repository(owner: "syntax-tree", name: "unist") {
        object(expression: "master:readme.md") {
          ... on GitHub_Blob {
            text
          }
        }
      }
    }
  }
`
