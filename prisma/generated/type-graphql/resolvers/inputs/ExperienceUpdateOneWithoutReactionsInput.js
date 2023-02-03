"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutReactionsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutReactionsInput");
const ExperienceCreateWithoutReactionsInput_1 = require("../inputs/ExperienceCreateWithoutReactionsInput");
const ExperienceUpdateWithoutReactionsInput_1 = require("../inputs/ExperienceUpdateWithoutReactionsInput");
const ExperienceUpsertWithoutReactionsInput_1 = require("../inputs/ExperienceUpsertWithoutReactionsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneWithoutReactionsInput = class ExperienceUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutReactionsInput_1.ExperienceCreateWithoutReactionsInput)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutReactionsInput_1.ExperienceCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutReactionsInput_1.ExperienceCreateOrConnectWithoutReactionsInput)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutReactionsInput_1.ExperienceUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutReactionsInput_1.ExperienceUpsertWithoutReactionsInput)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutReactionsInput_1.ExperienceUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutReactionsInput_1.ExperienceUpdateWithoutReactionsInput)
], ExperienceUpdateOneWithoutReactionsInput.prototype, "update", void 0);
ExperienceUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], ExperienceUpdateOneWithoutReactionsInput);
exports.ExperienceUpdateOneWithoutReactionsInput = ExperienceUpdateOneWithoutReactionsInput;
