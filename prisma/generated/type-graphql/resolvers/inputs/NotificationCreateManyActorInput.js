"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateManyActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NotificationCreateManyActorInput = class NotificationCreateManyActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyActorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyActorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyActorInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NotificationCreateManyActorInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateManyActorInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateManyActorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NotificationCreateManyActorInput.prototype, "updatedAt", void 0);
NotificationCreateManyActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateManyActorInput", {
        isAbstract: true
    })
], NotificationCreateManyActorInput);
exports.NotificationCreateManyActorInput = NotificationCreateManyActorInput;
