"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryWhereInput_1 = require("../../../inputs/QueryWhereInput");
let DeleteManyQueryArgs = class DeleteManyQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereInput_1.QueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryWhereInput_1.QueryWhereInput)
], DeleteManyQueryArgs.prototype, "where", void 0);
DeleteManyQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyQueryArgs);
exports.DeleteManyQueryArgs = DeleteManyQueryArgs;
