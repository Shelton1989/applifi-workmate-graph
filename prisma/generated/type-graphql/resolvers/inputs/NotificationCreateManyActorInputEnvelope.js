"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateManyActorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyActorInput_1 = require("../inputs/NotificationCreateManyActorInput");
let NotificationCreateManyActorInputEnvelope = class NotificationCreateManyActorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateManyActorInput_1.NotificationCreateManyActorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateManyActorInputEnvelope.prototype, "data", void 0);
NotificationCreateManyActorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateManyActorInputEnvelope", {
        isAbstract: true
    })
], NotificationCreateManyActorInputEnvelope);
exports.NotificationCreateManyActorInputEnvelope = NotificationCreateManyActorInputEnvelope;
