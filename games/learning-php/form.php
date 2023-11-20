<form action="/learning-php/contacto.php" method="post">
  <div>
    <?php session_start();
    if (isset($_SESSION["nombre"])) : ?>
      <div class="texto-rojo">
        <?= $_SESSION["nombre"]; ?>
      </div>
    <?php
      unset($_SESSION["nombre"]);
    endif ?>
    <input type="text" placeholder="nombre" name="nombre">
  </div>

  <div>
    <?php
    if (isset($_SESSION["email"])) : ?>
      <div class="texto-rojo">
        <?= $_SESSION["email"]; ?>
      </div>
    <?php
      unset($_SESSION["email"]);
    endif ?>
    <input type="email" placeholder="email" name="email">
  </div>
  <div>
    <?php
    if (isset($_SESSION["telefono"])) : ?>
      <div class="texto-rojo">
        <?= $_SESSION["telefono"]; ?>
      </div>
    <?php
      unset($_SESSION["telefono"]);
    endif ?>
    <input type="tel" placeholder="teléfono" name="telefono">
  </div>
  <div>
    <textarea name="texto" cols="30" rows="10"></textarea>
  </div>

  <input type="submit" value="envialo ya">
</form>