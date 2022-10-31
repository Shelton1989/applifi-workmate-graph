"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutReactionsInput_1 = require("../inputs/TopicCreateOrConnectWithoutReactionsInput");
const TopicCreateWithoutReactionsInput_1 = require("../inputs/TopicCreateWithoutReactionsInput");
const TopicUpdateWithoutReactionsInput_1 = require("../inputs/TopicUpdateWithoutReactionsInput");
const TopicUpsertWithoutReactionsInput_1 = require("../inputs/TopicUpsertWithoutReactionsInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicUpdateOneWithoutReactionsInput = class TopicUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutReactionsInput_1.TopicCreateWithoutReactionsInput)
], TopicUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutReactionsInput_1.TopicCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutReactionsInput_1.TopicCreateOrConnectWithoutReactionsInput)
], TopicUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpsertWithoutReactionsInput_1.TopicUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpsertWithoutReactionsInput_1.TopicUpsertWithoutReactionsInput)
], TopicUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TopicUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TopicUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutReactionsInput_1.TopicUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutReactionsInput_1.TopicUpdateWithoutReactionsInput)
], TopicUpdateOneWithoutReactionsInput.prototype, "update", void 0);
TopicUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], TopicUpdateOneWithoutReactionsInput);
exports.TopicUpdateOneWithoutReactionsInput = TopicUpdateOneWithoutReactionsInput;
