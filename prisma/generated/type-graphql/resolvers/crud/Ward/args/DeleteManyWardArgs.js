"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardWhereInput_1 = require("../../../inputs/WardWhereInput");
let DeleteManyWardArgs = class DeleteManyWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereInput_1.WardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardWhereInput_1.WardWhereInput)
], DeleteManyWardArgs.prototype, "where", void 0);
DeleteManyWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWardArgs);
exports.DeleteManyWardArgs = DeleteManyWardArgs;
