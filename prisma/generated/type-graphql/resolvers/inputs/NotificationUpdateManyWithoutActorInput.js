"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateManyWithoutActorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyActorInputEnvelope_1 = require("../inputs/NotificationCreateManyActorInputEnvelope");
const NotificationCreateOrConnectWithoutActorInput_1 = require("../inputs/NotificationCreateOrConnectWithoutActorInput");
const NotificationCreateWithoutActorInput_1 = require("../inputs/NotificationCreateWithoutActorInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutActorInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutActorInput");
const NotificationUpdateWithWhereUniqueWithoutActorInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutActorInput");
const NotificationUpsertWithWhereUniqueWithoutActorInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutActorInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutActorInput = class NotificationUpdateManyWithoutActorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutActorInput_1.NotificationCreateWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutActorInput_1.NotificationCreateOrConnectWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutActorInput_1.NotificationUpsertWithWhereUniqueWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyActorInputEnvelope_1.NotificationCreateManyActorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyActorInputEnvelope_1.NotificationCreateManyActorInputEnvelope)
], NotificationUpdateManyWithoutActorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutActorInput_1.NotificationUpdateWithWhereUniqueWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutActorInput_1.NotificationUpdateManyWithWhereWithoutActorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutActorInput.prototype, "deleteMany", void 0);
NotificationUpdateManyWithoutActorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateManyWithoutActorInput", {
        isAbstract: true
    })
], NotificationUpdateManyWithoutActorInput);
exports.NotificationUpdateManyWithoutActorInput = NotificationUpdateManyWithoutActorInput;
