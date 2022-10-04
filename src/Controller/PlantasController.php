<?php

namespace App\Controller;

use App\Entity\Plantas;
use App\Form\PlantasType;
use App\Repository\PlantasRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/plantas')]
class PlantasController extends AbstractController
{
    #[Route('/', name: 'app_plantas_index', methods: ['GET'])]
    public function index(PlantasRepository $plantasRepository): Response
    {
        return $this->render('plantas/index.html.twig', [
            'plantas' => $plantasRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_plantas_new', methods: ['GET', 'POST'])]
    public function new(Request $request, PlantasRepository $plantasRepository): Response
    {
        $planta = new Plantas();
        $form = $this->createForm(PlantasType::class, $planta);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plantasRepository->save($planta, true);

            return $this->redirectToRoute('app_plantas_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('plantas/new.html.twig', [
            'planta' => $planta,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_plantas_show', methods: ['GET'])]
    public function show(Plantas $planta): Response
    {
        return $this->render('plantas/show.html.twig', [
            'planta' => $planta,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_plantas_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Plantas $planta, PlantasRepository $plantasRepository): Response
    {
        $form = $this->createForm(PlantasType::class, $planta);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plantasRepository->save($planta, true);

            return $this->redirectToRoute('app_plantas_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('plantas/edit.html.twig', [
            'planta' => $planta,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_plantas_delete', methods: ['POST'])]
    public function delete(Request $request, Plantas $planta, PlantasRepository $plantasRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$planta->getId(), $request->request->get('_token'))) {
            $plantasRepository->remove($planta, true);
        }

        return $this->redirectToRoute('app_plantas_index', [], Response::HTTP_SEE_OTHER);
    }
}
