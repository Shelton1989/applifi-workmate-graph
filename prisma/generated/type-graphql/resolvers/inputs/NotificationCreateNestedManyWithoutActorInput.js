"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateNestedManyWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyActorInputEnvelope_1 = require("../inputs/NotificationCreateManyActorInputEnvelope");
const NotificationCreateOrConnectWithoutActorInput_1 = require("../inputs/NotificationCreateOrConnectWithoutActorInput");
const NotificationCreateWithoutActorInput_1 = require("../inputs/NotificationCreateWithoutActorInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateNestedManyWithoutActorInput = class NotificationCreateNestedManyWithoutActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutActorInput_1.NotificationCreateWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutActorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutActorInput_1.NotificationCreateOrConnectWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutActorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyActorInputEnvelope_1.NotificationCreateManyActorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyActorInputEnvelope_1.NotificationCreateManyActorInputEnvelope)
], NotificationCreateNestedManyWithoutActorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutActorInput.prototype, "connect", void 0);
NotificationCreateNestedManyWithoutActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateNestedManyWithoutActorInput", {
        isAbstract: true
    })
], NotificationCreateNestedManyWithoutActorInput);
exports.NotificationCreateNestedManyWithoutActorInput = NotificationCreateNestedManyWithoutActorInput;
