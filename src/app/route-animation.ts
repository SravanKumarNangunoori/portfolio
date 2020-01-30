import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('About => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1.4s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experience => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Skills => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Education => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        // transition('About => Education', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(100%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        // transition('Projects => Skills', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        // transition('Skills => Education', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        // transition('Education => Experience', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        // transition('Experience => About', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
    ]);