const toProjectsDropdown = (projects, status) => {
  const projectLinks = projects
    .filter(project => status && project.status && status === project.status)
    .map(project => `<a class="dropdown-item" href="./projet-${project.code}1.html">${project.title}</a>`)
    .join('\n')
  return `<div class="dropdown">
${projectLinks}
</div>`
}

const toGarmentSection = (project) => {
  if (project && project.garmentImages && project.garmentImages.length >= 1) {
    return `<section class="garment">
      <h3>Réalisation</h3>
      <div class="images">
        ${toProjectImages(project.garmentImages)}
      </div>
    </section>`
  }
  return ''
}

const toProjectImage = (img) => {
  if (img) {
    return `<figure class="illustration">
  <img src="./${img.src}" alt="${img.alt}" />
</figure>`
  }
  return ''
}

const toProjectImages = (images) => {
  if (images) {
    return images
      .map(img => toProjectImage(img))
      .join('\n')
  }
  return ''
}

const toHTML = (projects, project) => {
  return `<!DOCTYPE html>
  <html lang="fr" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title}</title>
    <link href="style.css" rel="stylesheet">
  </head>

  <body>
    <nav>
      <div class="home">
        <a href="/">Accueil</a>
      </div>
      <div class="projects-menu">
        <a href="#">Mes projets</a>
        ${toProjectsDropdown(projects, 'wip')}
      </div>
      <div class="makings-menu">
        <a href="#">Mes réalisations</a>
        ${toProjectsDropdown(projects, 'finished')}
      </div>
    </nav>
    <header>
      <h1>
        <a href="index.html">Choubi Couture</a>
      </h1>
    </header>
    <main>
      <article class="project project-${project.code}">
        <h2>${project.title}</h2>
        <section class="pattern">
          <div class="content">
            <div class="infos">
              <h3>Patron</h3>
              ${project.patternHTML}
            </div>
            <div class="images">
              ${toProjectImages(project.patternImages)}
            </div>
          </div>
        </section>
        <section class="fabric">
          <div class="content">
            <div class="infos">
              <h3>Tissu</h3>
              ${project.fabricHTML}
            </div>
            <div class="images">
              ${toProjectImages(project.fabricImages)}
            </div>
          </div>
        </section>
        <section class="note">
          <h3>Notes</h3>
          ${project.notesHTML}
        </section>
        ${toGarmentSection(project)}
      </article>
    </main>
    <footer>Léa Rumiz - Retrouvez toutes mes créations sur <a href="https://www.instagram.com/lea_rmz/" target="_blank">Instagram</a> </footer>

  </body>

  </html>`
}

module.exports.toHTML = toHTML
