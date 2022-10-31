"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateOrConnectWithoutReactionsInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutReactionsInput");
const EpisodeCreateWithoutReactionsInput_1 = require("../inputs/EpisodeCreateWithoutReactionsInput");
const EpisodeUpdateWithoutReactionsInput_1 = require("../inputs/EpisodeUpdateWithoutReactionsInput");
const EpisodeUpsertWithoutReactionsInput_1 = require("../inputs/EpisodeUpsertWithoutReactionsInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpdateOneWithoutReactionsInput = class EpisodeUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateOrConnectWithoutReactionsInput_1.EpisodeCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateOrConnectWithoutReactionsInput_1.EpisodeCreateOrConnectWithoutReactionsInput)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpsertWithoutReactionsInput_1.EpisodeUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpsertWithoutReactionsInput_1.EpisodeUpsertWithoutReactionsInput)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutReactionsInput_1.EpisodeUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutReactionsInput_1.EpisodeUpdateWithoutReactionsInput)
], EpisodeUpdateOneWithoutReactionsInput.prototype, "update", void 0);
EpisodeUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], EpisodeUpdateOneWithoutReactionsInput);
exports.EpisodeUpdateOneWithoutReactionsInput = EpisodeUpdateOneWithoutReactionsInput;
