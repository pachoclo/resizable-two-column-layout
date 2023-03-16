const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc
  vel risus commodo viverra maecenas accumsan. Quis vel eros donec ac odio
  tempor orci dapibus. Varius vel pharetra vel turpis nunc eget lorem dolor
  sed. Urna condimentum mattis pellentesque id. Platea dictumst vestibulum
  rhoncus est pellentesque elit ullamcorper dignissim. Posuere urna nec
  tincidunt praesent semper feugiat nibh sed pulvinar. At auctor urna nunc
  id. Mattis enim ut tellus elementum sagittis. Egestas fringilla phasellus
  faucibus scelerisque eleifend. Ridiculus mus mauris vitae ultricies leo
  integer. Cursus vitae congue mauris rhoncus aenean vel elit. Egestas erat
  imperdiet sed euismod nisi porta lorem mollis aliquam.`,

  `Magna etiam tempor orci eu lobortis. In hac habitasse platea dictumst.
  Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Quam id leo in
  vitae turpis massa sed elementum tempus. Diam maecenas sed enim ut sem
  viverra aliquet eget sit. Accumsan in nisl nisi scelerisque eu ultrices
  vitae auctor. Cras sed felis eget velit aliquet sagittis id. Magna etiam
  tempor orci eu lobortis elementum nibh. Quis risus sed vulputate odio ut.
  Tristique senectus et netus et malesuada fames ac. Dui nunc mattis enim
  ut. Diam vulputate ut pharetra sit amet. Faucibus nisl tincidunt eget
  nullam. Pharetra convallis posuere morbi leo urna molestie at elementum.
  Cursus turpis massa tincidunt dui. Nunc id cursus metus aliquam eleifend.
  Id interdum velit laoreet id donec ultrices tincidunt. Odio eu feugiat
  pretium nibh. Ut lectus arcu bibendum at varius vel.`,

  `Porttitor massa id neque aliquam. Ac turpis egestas integer eget aliquet
  nibh praesent tristique. Vitae tortor condimentum lacinia quis vel eros
  donec. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus
  est. Eu feugiat pretium nibh ipsum. Ipsum faucibus vitae aliquet nec
  ullamcorper sit. Amet consectetur adipiscing elit pellentesque. Vel
  pharetra vel turpis nunc eget lorem dolor sed viverra. Feugiat pretium
  nibh ipsum consequat nisl vel pretium lectus quam. Iaculis urna id
  volutpat lacus laoreet non. Pellentesque habitant morbi tristique senectus
  et netus et. Quis ipsum suspendisse ultrices gravida. Diam donec
  adipiscing tristique risus nec feugiat in fermentum posuere. Nunc sed
  augue lacus viverra vitae congue eu consequat ac. Mauris in aliquam sem
  fringilla ut morbi tincidunt. Turpis egestas integer eget aliquet nibh.`,

  `Vel orci porta non pulvinar neque. Magna fringilla urna porttitor rhoncus.
  Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Consequat ac
  felis donec et odio pellentesque diam volutpat. Tristique senectus et
  netus et malesuada fames ac turpis egestas. Nulla porttitor massa id neque
  aliquam vestibulum. Sed odio morbi quis commodo odio. Pharetra magna ac
  placerat vestibulum lectus mauris ultrices eros in. Ornare massa eget
  egestas purus viverra accumsan. Aliquam vestibulum morbi blandit cursus
  risus at ultrices mi tempus. Lectus proin nibh nisl condimentum id
  venenatis a condimentum. Sed euismod nisi porta lorem mollis aliquam ut.
  Adipiscing commodo elit at imperdiet.`,

  `Dignissim convallis aenean et tortor. Commodo ullamcorper a lacus
  vestibulum sed arcu non odio euismod. Urna nec tincidunt praesent semper
  feugiat nibh sed. Egestas dui id ornare arcu odio. Pellentesque massa
  placerat duis ultricies lacus. Sit amet justo donec enim diam. Urna id
  volutpat lacus laoreet non curabitur gravida arcu. Vel fringilla est
  ullamcorper eget nulla facilisi etiam dignissim diam. Eget aliquet nibh
  praesent tristique magna. Blandit libero volutpat sed cras. Semper eget
  duis at tellus. Cursus euismod quis viverra nibh cras. Dapibus ultrices in
  iaculis nunc sed.`,
]

export const MainContent = () => (
  <>
    <h2>Main</h2>

    {paragraphs.map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ))}
  </>
)
