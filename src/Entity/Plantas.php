<?php

namespace App\Entity;

use App\Repository\PlantasRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlantasRepository::class)]
class Plantas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $Nombre = null;

    #[ORM\Column]
    private ?int $Codigo = null;

    #[ORM\Column(length: 10)]
    private ?string $Precio = null;

    #[ORM\Column(length: 100)]
    private ?string $Descripcion = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->Nombre;
    }

    public function setNombre(string $Nombre): self
    {
        $this->Nombre = $Nombre;

        return $this;
    }

    public function getCodigo(): ?int
    {
        return $this->Codigo;
    }

    public function setCodigo(int $Codigo): self
    {
        $this->Codigo = $Codigo;

        return $this;
    }

    public function getPrecio(): ?string
    {
        return $this->Precio;
    }

    public function setPrecio(string $Precio): self
    {
        $this->Precio = $Precio;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->Descripcion;
    }

    public function setDescripcion(string $Descripcion): self
    {
        $this->Descripcion = $Descripcion;

        return $this;
    }
}
