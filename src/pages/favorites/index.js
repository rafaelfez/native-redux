import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import FavoriteItem from './components/FavoriteItem';

export default class Favorites extends Component {
  static navigationOptions =  {
    title: 'Meus favoritos',
  };

  state = {
    favorites: [
        {
        "id": 132465678,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMzI0NjU2Nzg=",
        "name": "comunidade",
        "full_name": "Rocketseat/comunidade",
        "private": false,
        "owner": {
          "login": "Rocketseat",
          "id": 28929274,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0",
          "avatar_url": "https://avatars0.githubusercontent.com/u/28929274?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Rocketseat",
          "html_url": "https://github.com/Rocketseat",
          "followers_url": "https://api.github.com/users/Rocketseat/followers",
          "following_url": "https://api.github.com/users/Rocketseat/following{/other_user}",
          "gists_url": "https://api.github.com/users/Rocketseat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Rocketseat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Rocketseat/subscriptions",
          "organizations_url": "https://api.github.com/users/Rocketseat/orgs",
          "repos_url": "https://api.github.com/users/Rocketseat/repos",
          "events_url": "https://api.github.com/users/Rocketseat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Rocketseat/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "html_url": "https://github.com/Rocketseat/comunidade",
        "description": "Informações sobre a comunidade da Rocketseat",
        "fork": false,
        "url": "https://api.github.com/repos/Rocketseat/comunidade",
        "forks_url": "https://api.github.com/repos/Rocketseat/comunidade/forks",
        "keys_url": "https://api.github.com/repos/Rocketseat/comunidade/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Rocketseat/comunidade/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Rocketseat/comunidade/teams",
        "hooks_url": "https://api.github.com/repos/Rocketseat/comunidade/hooks",
        "issue_events_url": "https://api.github.com/repos/Rocketseat/comunidade/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Rocketseat/comunidade/events",
        "assignees_url": "https://api.github.com/repos/Rocketseat/comunidade/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Rocketseat/comunidade/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Rocketseat/comunidade/tags",
        "blobs_url": "https://api.github.com/repos/Rocketseat/comunidade/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Rocketseat/comunidade/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Rocketseat/comunidade/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Rocketseat/comunidade/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Rocketseat/comunidade/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Rocketseat/comunidade/languages",
        "stargazers_url": "https://api.github.com/repos/Rocketseat/comunidade/stargazers",
        "contributors_url": "https://api.github.com/repos/Rocketseat/comunidade/contributors",
        "subscribers_url": "https://api.github.com/repos/Rocketseat/comunidade/subscribers",
        "subscription_url": "https://api.github.com/repos/Rocketseat/comunidade/subscription",
        "commits_url": "https://api.github.com/repos/Rocketseat/comunidade/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Rocketseat/comunidade/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Rocketseat/comunidade/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Rocketseat/comunidade/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Rocketseat/comunidade/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Rocketseat/comunidade/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Rocketseat/comunidade/merges",
        "archive_url": "https://api.github.com/repos/Rocketseat/comunidade/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Rocketseat/comunidade/downloads",
        "issues_url": "https://api.github.com/repos/Rocketseat/comunidade/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Rocketseat/comunidade/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Rocketseat/comunidade/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Rocketseat/comunidade/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Rocketseat/comunidade/labels{/name}",
        "releases_url": "https://api.github.com/repos/Rocketseat/comunidade/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Rocketseat/comunidade/deployments",
        "created_at": "2018-05-07T13:37:33Z",
        "updated_at": "2019-02-10T14:37:01Z",
        "pushed_at": "2018-09-18T04:14:08Z",
        "git_url": "git://github.com/Rocketseat/comunidade.git",
        "ssh_url": "git@github.com:Rocketseat/comunidade.git",
        "clone_url": "https://github.com/Rocketseat/comunidade.git",
        "svn_url": "https://github.com/Rocketseat/comunidade",
        "homepage": "http://comunidade.rocketseat.com.br",
        "size": 4233,
        "stargazers_count": 84,
        "watchers_count": 84,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 4,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 4,
        "open_issues": 0,
        "watchers": 84,
        "default_branch": "master",
        "organization": {
          "login": "Rocketseat",
          "id": 28929274,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0",
          "avatar_url": "https://avatars0.githubusercontent.com/u/28929274?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Rocketseat",
          "html_url": "https://github.com/Rocketseat",
          "followers_url": "https://api.github.com/users/Rocketseat/followers",
          "following_url": "https://api.github.com/users/Rocketseat/following{/other_user}",
          "gists_url": "https://api.github.com/users/Rocketseat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Rocketseat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Rocketseat/subscriptions",
          "organizations_url": "https://api.github.com/users/Rocketseat/orgs",
          "repos_url": "https://api.github.com/users/Rocketseat/repos",
          "events_url": "https://api.github.com/users/Rocketseat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Rocketseat/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 4,
        "subscribers_count": 21
      }
      ],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        { !this.state.favorites.length
          ? <Text style={styles.empty}>Nenhum favorito adicionado.</Text>
          : this.renderList()
        }

      </View>
    );
  }
}
